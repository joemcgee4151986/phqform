const json = {
  "title": "Global Physical Activity Questionnaire (GPAQ)",
  "completedHtmlOnCondition": [{
    "expression": "{totalScore} > ({maxScore} / 3 * 2)",
    "html": "Your PHQ-9 score is {totalScore} out of {maxScore} points. Antidepressant or psychotherapy is recommended. If your score is higher than 20 than both are recommended(especially if not improved on monotherapy"
  }, {
    "expression": "{totalScore} <= ({maxScore} / 3)",
    "html": "Your PHQ-9 score is {totalScore} out of {maxScore} points. Diagnosis: Minimal Symptoms. Treatment Recommendation: Support, educate to call if worse, return in one month"
  }, {
    "expression": "({maxScore} / 3 * 2) < {totalScore} <= ({maxScore} / 3)",
    "html": "Your PHQ-9 score is {totalScore} out of {maxScore} points. Diagnosis: Minor Depression, Dysthymia, Major Depression. Treatment Recommendation: Support, watchful waiting Antidepressent or psychotherapy "
  }],
  "pages": [{
    "name": "physical-activity",
  
    "description":
      "",
    "elements": [{
      "type": "panel",
      "name": "activity-at-work",
      "title": "Patient Health Questionnaire",
      "elements": [{
        "type": "radiogroup",
        "name": "question1",
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
        "title":
          "Feeling down, depressed or hopeless",
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ]
      }, {
        "type": "radiogroup",
        "name": "question3",
        "title": "Trouble falling asleep, staying asleep, or sleeping too much",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ]
      }, 
      {
        "type": "radiogroup",
        "name": "question4",
        "title": "Feeling tired or having little energy",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
      },
      {
        "type": "radiogroup",
        "name": "question5",
        "title": "Poor appetite or overeating",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
      },
      {
        "type": "radiogroup",
        "name": "question6",
        "title": "Feeling bad about yourself - or that you're a failure or have let yourself or your family down ",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
      },
      {
        "type": "radiogroup",
        "name": "question7",
        "title": "Trouble concentrating on things, such as reading the newspaper or watching television",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
      },
      {
        "type": "radiogroup",
        "name": "question8",
        "title": "Moving or speaking so slowly that other people could have noticed. Or, the opposite- being so fidfety or restless that you have been moving around a lot more than usual",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
      },
      {
        "type": "radiogroup",
        "name": "question9",
        "title": "Thoughts that you would be better off dead or of hurting yourself in some way",              
        "choices": [
            {  "text": "0", "score": 0 },
            {  "text": "1", "score": 1 },
            {  "text": "2", "score": 2},
            {  "text": "3", "score": 3},
        ],
      }
      ]
    }]
  }]
};