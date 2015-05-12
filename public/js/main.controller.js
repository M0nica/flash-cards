app.controller('MainController', function ($scope, FlashCardsFactory, whateverName) {

	/*$scope.flashCards = whateverName;*/


	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;

			     (answer.correct) ? ScoreFactory.correct +=1 : ScoreFactory.incorrect +=1;
		}
	}

	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];


    $scope.getCategoryCards = function (category) {

        FlashCardsFactory.getFlashCards(category).then(function (flashcards) {
            $scope.flashCards = flashcards;

        });
        $scope.chosenCategory = category;

    };

});

app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
});