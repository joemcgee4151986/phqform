const json = {
  "title": "Global Physical Activity Questionnaire (GPAQ)",
  "completedHtmlOnCondition": [{
    "expression": "{totalScore} > ({maxScore} / 3 * 2)",
    "html": "You got {totalScore} out of {maxScore} points. You did great!"
  }, {
    "expression": "{totalScore} <= ({maxScore} / 3)",
    "html": "You got {totalScore} out of {maxScore} points. Diagnosis: Minimal Symptoms. Treatment Recommendation: Support, educate to call if worse, return in one month"
  }, {
    "expression": "({maxScore} / 3 * 2) < {totalScore} <= ({maxScore} / 3)",
    "html": "You got {totalScore} out of {maxScore} points. Well done!"
  }],
  "pages": [{
    "name": "physical-activity",
    "title": "Physical Activity",
    "description":
      "Next we are going to ask you about the time you spend doing different types of physical activity in a typical week. Please answer these questions even if you do not consider yourself to be a physically active person. Think first about the time you spend doing work. Think of work as the things that you have to do, such as paid or unpaid work, study/training, household chores, harvesting food/crops, fishing or hunting for food, seeking employment. In answering the following questions, 'vigorous-intensity activities' are activities that require hard physical effort and cause large increases in breathing or heart rate, 'moderate-intensity activities' are activities that require moderate physical effort and cause small increases in breathing or heart rate.",
    "elements": [{
      "type": "panel",
      "name": "activity-at-work",
      "title": "Activity at work",
      "elements": [{
        "type": "radiogroup",
        "name": "does-vigorous-activity",
        "title":
          "Little interest in doing things",
        "choices": [
          {  "text": "0", "score": 0 },
          {  "text": "1", "score": 1 },
          {  "text": "2", "score": 2},
          {  "text": "3", "score": 3},
        ]
      }, {
        "type": "radiogroup",
        "name": "vigorous-activity-frequency",
        "visibleIf": "{does-vigorous-activity} = true",
        "title":
          "Feeling down, depressed or hopeless",
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ]
      }, {
        "type": "rating",
        "name": "vigorous-activity-duration",
        "visibleIf": "{does-vigorous-activity} = true",
        "title":
          "How much time do you spend doing vigorous-intensity activities at work on a typical day?",
        "rateValues": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
        "minRateDescription": "Less Than Two Hours",
        "maxRateDescription": "Full Time"
      }, {
        "type": "radiogroup",
        "name": "does-moderate-activity",
        "title": "Feeling down, depressed or hopeless",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ]
      }, 
      ]
    }]
  }]
};