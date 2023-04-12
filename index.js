// Add a custom `score` property to choice options
Survey.Serializer.addProperty("itemvalue", {
    name: "score:number"
  });
var SurveyComponent = Vue.component("survey-component", {
  template: '<survey :survey="survey" />',
  name: "survey-component",
  data() {
    const survey = new Survey.Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    function calculateMaxScore(questions) {
      var maxScore = 0;
      questions.forEach((question) => {
        if (question.choices) {
          const maxValue = Math.max.apply( Math, question.choices.map(o => o.score) );
          maxScore += maxValue;
        }
        if (question.rateValues) {
          const maxValue = Math.max.apply( Math, question.rateValues.map(o => o.score) );
          maxScore += maxValue;
        }
        if (question.getType() === "matrix") {
          const maxMatrixValue = Math.max.apply( Math, question.columns.map(o => o.score) ) * question.rows.length;
          maxScore += maxMatrixValue;
        }
      });
      return maxScore;
    } 
    function calculateTotalScore(data) {
      var totalScore = 0;
      data.forEach((item) => {
        const question = survey.getQuestionByValueName(item.name);
        const qValue = item.value;
        if (question.choices) {
          const selectedChoice = question.choices.find(choice => choice.value === qValue);
          if (selectedChoice) {
            totalScore += selectedChoice.score;
          }
        }
        if (question.rateValues) {
          const selectedRate = question.rateValues.find(rate => rate.value === qValue);
          if (selectedRate) {
            totalScore += selectedRate.score;
          }
        }
        if (question.getType() === "matrix") {
          item.data.forEach((dataItem) => {
            if (!!dataItem.value) {
              totalScore += dataItem.score;
            }
          });
        }
      });
      return totalScore;
    }
    survey.onCompleting.add((sender) => {  
      const maxScore = calculateMaxScore(sender.getAllQuestions());
      // Get survey results as a flat data array
      const plainData = sender.getPlainData({
        // Include `score` values into the data array
        calculations: [{ propertyName: "score" }]
      });
      const totalScore = calculateTotalScore(plainData);
    
      // Save the scores in survey results
      sender.setValue("maxScore", maxScore);
      sender.setValue("totalScore", totalScore);
    });
    return {
      survey: survey,
    };
  },
});
new Vue({
    el: "#app",
    template: '<div id="surveyElement"> <survey-component /></div>',
    component: {
        "survey-component": SurveyComponent
    }
});