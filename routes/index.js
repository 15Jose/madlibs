var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*POST form data*/
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}


  function generateStory1(formData) {
    return `Twas a ${formData.adjective1} day. Because the weather was ${formData.adjective2}.
     I was ${formData.verb1} most of the day. That was the only non ${formData.adjective1} part though!
     In ${formData.noun1} today we weren't in our usual classroom today because it started to ${formData.verb2}. 
     So we spent the class period in the ${formData.noun2}.`
  }

  function generateStory2(formData) {
    return `I was hungry earlier today so I ordered ${formData.noun1}. it was from this newer place called ${formData.noun2}.
     the food came ${formData.adjective1} because he said the weather was ${formData.verb1} which was ${formData.adjective2}, 
     because I was already ${formData.verb2}.`
  }

  function generateStory3(formData) {
    return `I woke up early today to see it was snowing! it was so ${formData.adjective1} to see because it usually snows ${formData.adjective2} often than this.
    So I ${formData.verb1} downstairs to see my parents telling me School is closed for today. I was so exited so I ran back upstairs to ${formData.verb2}.
    After that I ran outside to see what I can do while the snow is here. I then made some ${formData.noun1} I used them to ${formData.noun2}.`
  }