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

function createSurveyPdfModel(surveyModel) {
  let pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
  let pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
  let options = {
      fontSize: 14,
      margins: {
          left: 10,
          right: 10,
          top: 10,
          bot: 10
      },
      
      
      format: [pdfWidth, pdfHeight]
  }
}

function createSurveyPdfModel(surveyModel) {
  let pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
  let pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
  let options = {
      fontSize: 14,
      margins: {
          left: 10,
          right: 10,
          top: 10,
          bot: 10
      },
      
      
      format: [pdfWidth, pdfHeight]
  };
  const surveyPDF = new SurveyPDF.SurveyPDF(json, options);
  if (surveyModel) {
      surveyPDF.data = surveyModel.data;
  }
  
  return surveyPDF;
}
function saveSurveyToPdf(filename, surveyModel) {
  createSurveyPdfModel(surveyModel).save(filename);
}
var SurveyPdfComponent = Vue.component("survey-pdf-component", {
  template: '<div>        <button class="sd-btn" style="margin-left:20px;margin-top:20px" v-on:click="savePdf()">Save as PDF</button>        <survey :survey="survey" />    </div>',
  name: "survey-pdf-component",
  data() {
      const survey = new Survey.Model(json);
      survey.data = {
        'Quality': {
          'affordable': '3',
          'does what it claims': '4',
          'better then others': '3',
          'easy to use': '5'
        },
        'satisfaction': '4',
        'recommend friends': '4',
        'suggestions': '24/7 support would help a lot.',
        'price to competitors': 'Not sure',
        'price': 'correct',
        'pricelimit': {
          'mostamount': 450,
          'leastamount': 200
        },
        'email': 'jon.snow@nightwatch.org'
      };
      return {
          survey: survey,
          savePdf: () => {
              saveSurveyToPdf("surveyResult.pdf", survey);
          }
      };
  },
});
new Vue({
  el: "#app",
  template: '<div id="surveyElement"> <survey-pdf-component /></div>',
  component: {
      "survey-pdf-component": SurveyPdfComponent
  }
});