import { useState, useMemo } from "react";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { QuizQuestion } from "@/types/vehicle";

const Quiz = () => {
  const navigate = useNavigate();
  
  // Generate quiz questions
  const quizQuestions = useMemo((): QuizQuestion[] => {
    const shuffledVehicles = [...vehicles].sort(() => Math.random() - 0.5).slice(0, 5);
    
    return shuffledVehicles.map((vehicle, index) => {
      // Create wrong options from other vehicles
      const wrongOptions = vehicles
        .filter(v => v.id !== vehicle.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.name);
      
      const allOptions = [vehicle.name, ...wrongOptions].sort(() => Math.random() - 0.5);
      const correctAnswer = allOptions.indexOf(vehicle.name);

      return {
        id: `question-${index}`,
        question: `Which vehicle matches this definition: "${vehicle.shortDefinition}"`,
        options: allOptions,
        correctAnswer,
        vehicle
      };
    });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const currentQ = quizQuestions[currentQuestion];
  const score = calculateScore();
  const scorePercentage = Math.round((score / quizQuestions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-gradient-primary text-primary-foreground shadow-elegant">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">Quiz Results</h1>
              <Button
                variant="secondary"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Home
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-accent" />
              </div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
              <p className="text-muted-foreground">
                You scored {score} out of {quizQuestions.length} questions correctly
              </p>
              <div className="text-4xl font-bold text-primary mt-2">
                {scorePercentage}%
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {quizQuestions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span className="font-semibold">Question {index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {question.question}
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Your answer:</span>{' '}
                        <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                          {question.options[userAnswer]}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-sm">
                          <span className="font-medium">Correct answer:</span>{' '}
                          <span className="text-green-600">
                            {question.options[question.correctAnswer]}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
              
              <div className="flex gap-4 pt-4">
                <Button onClick={resetQuiz} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Take Quiz Again
                </Button>
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-primary-foreground shadow-elegant">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Vehicle Quiz</h1>
              <p className="text-primary-foreground/80">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline">
                {currentQ.vehicle.category}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Progress: {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
              </div>
            </div>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                  className="w-full text-left justify-start p-4 h-auto"
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </Button>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Quiz;