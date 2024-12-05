import PageLayout from '../components/layout/PageLayout';
import Quiz from '../components/common/Quiz';

const FinanceQuiz = () => {
  const quizData = {
    category: 'finance',
    title: 'Market Analysis',
    subtitle: 'Goldman Sachs forecasts strong earnings growth',
    imageUrl: '/finance_image.png',
    imageCaption: 'Financial markets rally on positive forecasts',
    articleText: [
      "Strategists at the investment bank argued that S&P 500 earnings per share were on track to rise by about 20% over the next two years. Goldman's forecast for full-year 2024 S&P 500 EPS is $241, followed by an 11% increase in 2025 and a 7% increase the following year, to $288 a share.",
      "The investment bank noted in their latest report that these targets could be surpassed based on current market conditions and policy changes, suggesting significant upside potential to their forecast.",
      "\"Market dynamics are favorable,\" the firm stated. \"Our analysis suggests that current trends in corporate performance and market sentiment could drive earnings growth beyond our base case scenario.\" The possibility of regulatory changes could bring additional earnings potential.",
      "Trading volumes have shown remarkable strength, with Bank of America reporting that traders invested $20 billion in US stocks, marking the largest single-day stock-purchasing surge in five months. Weekly flows to financial sector funds reached record levels at $2.9 billion."
    ],
    question: "How much money did traders put into US stocks in a single day?",
    answers: [
      "$20 Billion",
      "$241 Billion",
      "$2.9 Billion",
      "$288 Billion"
    ],
    correctAnswerIndex: 0
  };

  return (
    <PageLayout hideBottomNav={true}>
      <Quiz {...quizData} />
    </PageLayout>
  );
};

export default FinanceQuiz;
