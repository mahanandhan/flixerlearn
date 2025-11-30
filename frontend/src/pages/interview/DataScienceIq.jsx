import React from 'react';

const DataScienceIq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-indigo-900">📊 Data Science Interview Questions</h1>
          <p className="text-gray-700">A comprehensive list of beginner to advanced Data Science questions for interview prep</p>
        </div>

        {/* Basic Level */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">✅ Basic-Level Data Science Questions</h2>
          <QuestionBlock title="General Concepts" questions={[
            "What is data science and how is it different from data analytics?",
            "What are the main steps in a data science project lifecycle?",
            "Explain supervised vs unsupervised learning.",
            "What is overfitting and how can you prevent it?",
            "What are common data types used in data science?",
            "What is the difference between structured and unstructured data?"
          ]} />
        </section>

        {/* Intermediate Level */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🔧 Intermediate-Level Data Science Questions</h2>
          <QuestionBlock title="Techniques & Concepts" questions={[
            "Explain different types of regression techniques.",
            "What is the bias-variance tradeoff?",
            "How do you handle missing data?",
            "What are feature selection techniques?",
            "Explain how Principal Component Analysis (PCA) works.",
            "What is cross-validation and why is it important?",
            "What are some common evaluation metrics for classification models?"
          ]} />
        </section>

        {/* Advanced Level */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">🧠 Advanced-Level Data Science Questions</h2>
          <QuestionBlock title="Algorithms & Models" questions={[
            "Explain the working of random forests and how it reduces overfitting.",
            "How does gradient boosting work?",
            "Describe the differences between bagging and boosting.",
            "What are deep learning neural networks and when should you use them?",
            "How do you tune hyperparameters in machine learning models?",
            "What are the challenges with imbalanced datasets and how do you address them?",
            "Explain natural language processing (NLP) techniques.",
            "Describe how recommendation systems work."
          ]} />
        </section>

        {/* Practical / Coding Questions */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">🧪 Practical & Coding Questions</h2>
          <QuestionBlock title="Hands-on Tasks" questions={[
            "How would you handle a dataset with millions of records for training a model?",
            "Write a Python function to calculate accuracy, precision, recall, and F1-score.",
            "Explain how you would perform exploratory data analysis (EDA) on a new dataset.",
            "How do you detect and treat outliers in data?",
            "Describe steps for data preprocessing before feeding data to a model.",
            "What libraries do you commonly use in Python for data science?"
          ]} />
        </section>

        {/* Big Data & Tools */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">💾 Big Data & Tools</h2>
          <QuestionBlock title="Big Data Concepts" questions={[
            "What is Hadoop and how does it work?",
            "Explain MapReduce programming model.",
            "What is Spark and how does it differ from Hadoop?",
            "How do you handle real-time data streaming?",
            "What are common tools used for data visualization?"
          ]} />
        </section>

        {/* Statistical Concepts */}
        <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">📈 Statistical Concepts</h2>
          <QuestionBlock title="Statistics" questions={[
            "What is the Central Limit Theorem?",
            "Explain hypothesis testing and types of errors.",
            "What is p-value and how do you interpret it?",
            "What are confidence intervals?",
            "Explain correlation vs causation."
          ]} />
        </section>

      </div>
    </div>
  );
};

const QuestionBlock = ({ title, questions }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3 text-gray-900">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      {questions.map((q, idx) => (
        <li key={idx}>{q}</li>
      ))}
    </ul>
  </div>
);

export default DataScienceIq;
