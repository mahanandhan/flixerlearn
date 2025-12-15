import React from "react";

const AimlIq = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-wide text-white/90">
            AI/ML & Deep Learning Interview Prep
          </h1>
          <p className="text-sm md:text-base text-white/60">
            Prepare for interviews with categorized and structured questions
          </p>
        </div>

        {/* AI/ML Section */}
        <GlowingSection accent="from-emerald-400 via-cyan-400 to-sky-400">
          <h2 className="text-2xl font-semibold text-amber-300 mb-4">
            AI / Machine Learning Questions
          </h2>

          <QuestionBlock
            title="1. Basic / Conceptual Questions"
            questions={[
              "What is the difference between AI, Machine Learning, and Deep Learning?",
              "Explain supervised, unsupervised, and reinforcement learning with examples.",
              "What is overfitting, and how can you prevent it?",
              "What are bias and variance in ML?",
              "What is a confusion matrix, and how do you interpret it?",
            ]}
          />

          <QuestionBlock
            title="2. Technical Questions"
            questions={[
              "How does a decision tree work?",
              "What are kernels in SVM?",
              "Explain gradient descent.",
              "Describe backpropagation in neural networks.",
              "What are activation functions and their types?",
            ]}
          />

          <QuestionBlock
            title="3. Algorithm-Specific Questions"
            questions={[
              "How does k-NN work?",
              "Explain the Random Forest algorithm.",
              "What is PCA in dimensionality reduction?",
              "How does Naive Bayes work?",
              "Difference between bagging and boosting?",
            ]}
          />

          <QuestionBlock
            title="4. Coding / Implementation"
            questions={[
              "Implement linear regression from scratch.",
              "Build a classification model using scikit-learn.",
              "Preprocess data for ML pipeline.",
              "Use GridSearchCV for hyperparameter tuning.",
              "Train/test split and cross-validation code examples.",
            ]}
          />
        </GlowingSection>

        {/* Deep Learning Section */}
        <GlowingSection accent="from-sky-400 via-indigo-400 to-violet-400">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            Deep Learning Questions
          </h2>

          <QuestionBlock
            title="1. Core Concepts"
            questions={[
              "What is deep learning and how is it different from ML?",
              "Explain neural network architecture.",
              "What is backpropagation?",
              "Vanishing vs exploding gradients?",
              "Purpose of activation functions?",
            ]}
          />

          <QuestionBlock
            title="2. Advanced Questions"
            questions={[
              "How do CNNs work and where are they used?",
              "Difference between LSTM and GRU?",
              "What is transfer learning?",
              "Explain dropout and batch normalization.",
              "What is a GAN and how does it work?",
            ]}
          />

          <QuestionBlock
            title="3. Implementation Tasks"
            questions={[
              "Build a CNN for MNIST classification.",
              "Use PyTorch to create an RNN.",
              "Fine-tune BERT for text classification.",
              "Implement a custom loss function.",
              "Use TensorBoard to visualize training.",
            ]}
          />

          <QuestionBlock
            title="4. Scenario-Based"
            questions={[
              "How to deploy a deep learning model?",
              "Real-time video object detection architecture?",
              "Ethical concerns with generative models?",
              "How to handle overfitting in large models?",
              "Steps to build an image classifier?",
            ]}
          />
        </GlowingSection>

        {/* NLP Section */}
        <GlowingSection accent="from-pink-500 via-fuchsia-500 to-purple-500">
          <h2 className="text-2xl font-semibold text-pink-300 mb-4">
            Natural Language Processing (NLP) Questions
          </h2>

          <QuestionBlock
            title="🟢 Beginner Level"
            questions={[
              "What is NLP and how is it different from traditional text processing?",
              "What are the common preprocessing steps in NLP?",
              "What is tokenization and why is it important?",
              "Explain the difference between stemming and lemmatization.",
              "What are stop words and how are they handled?",
              "What is a Bag of Words (BoW) model?",
              "What is TF-IDF and how does it work?",
              "Explain the concept of n-grams.",
              "What is the difference between rule-based NLP and statistical NLP?",
              "Name some real-world applications of NLP.",
            ]}
          />

          <QuestionBlock
            title="🟡 Intermediate Level"
            questions={[
              "How does word embedding differ from one-hot encoding?",
              "What are Word2Vec, GloVe, and FastText? How are they different?",
              "Explain the concept of cosine similarity in the context of NLP.",
              "What are Named Entity Recognition (NER) and Part-of-Speech (POS) tagging?",
              "What is dependency parsing?",
              "How does sentiment analysis work?",
              "What is topic modeling? Compare LDA and NMF.",
              "What is the role of attention mechanisms in NLP?",
              "Explain the difference between sequence-to-sequence models and transformers.",
              "How do RNNs, LSTMs, and GRUs handle sequential data?",
            ]}
          />

          <QuestionBlock
            title="🔴 Advanced Level"
            questions={[
              "How does the Transformer architecture work? Why is it better than RNNs?",
              "Explain the inner workings of BERT or GPT models.",
              "What is self-attention and how is it computed?",
              "How does positional encoding work in transformers?",
              "How does masked language modeling (MLM) differ from causal language modeling?",
              "What is fine-tuning in the context of pre-trained language models?",
              "How do you handle out-of-vocabulary words in NLP models?",
              "What are some challenges in multilingual NLP?",
              "How can you evaluate the performance of an NLP model (classification, translation, etc.)?",
              "How do you handle bias and fairness in NLP models?",
            ]}
          />
        </GlowingSection>

        {/* OpenCV Section */}
        <GlowingSection accent="from-lime-400 via-emerald-400 to-teal-400">
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            OpenCV Questions
          </h2>

          <QuestionBlock
            title="🟢 Beginner Level"
            questions={[
              "What is OpenCV and what are its main uses?",
              "How do you load an image in OpenCV?",
              "What is the difference between cv2.imshow() and cv2.imwrite()?",
              "What are the different image types in OpenCV?",
              "How would you resize an image using OpenCV?",
              "What is the purpose of cv2.cvtColor() and how does it work?",
              "Explain how to convert an image to grayscale using OpenCV.",
              "What is an ROI (Region of Interest) in OpenCV, and how do you extract one from an image?",
              "What is the difference between cv2.waitKey() and cv2.destroyAllWindows()?",
              "How can you draw shapes like a rectangle, circle, or line on an image using OpenCV?",
            ]}
          />

          <QuestionBlock
            title="🟡 Intermediate Level"
            questions={[
              "What are contours in OpenCV and how can you detect them?",
              "Explain the difference between a filter and a kernel in image processing.",
              "How do you apply a Gaussian blur to an image in OpenCV?",
              "How does edge detection work in OpenCV, and what algorithms can you use?",
              "What are some ways to detect faces in an image using OpenCV?",
              "Explain the concept of histograms in OpenCV and how they are used in image analysis.",
              "How would you use OpenCV to perform image thresholding?",
              "How does the Hough Transform work in detecting lines in an image?",
              "What is image pyramiding, and how is it useful in object detection?",
              "How can you use OpenCV for camera calibration?",
            ]}
          />

          <QuestionBlock
            title="🔴 Advanced Level"
            questions={[
              "What is the difference between Harris Corner Detection and Shi-Tomasi Corner Detection?",
              "How does the SIFT (Scale-Invariant Feature Transform) algorithm work, and what are its advantages?",
              "Explain the concept of Homography in OpenCV and when you would use it.",
              "What is template matching in OpenCV, and how is it implemented?",
              "How can you use OpenCV to perform feature matching between two images?",
              "Explain the process of optical flow and how OpenCV can track object movement.",
              "How does the camera distortion correction work in OpenCV?",
              "What is the difference between cv2.findContours() and cv2.drawContours()?",
              "How does the Kalman filter work for object tracking in OpenCV?",
              "Explain how you can detect and track multiple objects in a video stream using OpenCV.",
            ]}
          />
        </GlowingSection>
      </div>
    </div>
  );
};

const GlowingSection = ({ accent, children }) => (
  <div className="relative">
    {/* outer neon glow */}
    <div
      className={`absolute inset-0 rounded-3xl bg-linear-to-r ${accent} opacity-40 blur-2xl`}
    />
    {/* inner dark pill card */}
    <section className="relative rounded-3xl border border-white/10 bg-linear-to-r from-[#020617] via-[#020617] to-[#05081f] p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
      {children}
    </section>
  </div>
);

const QuestionBlock = ({ title, questions }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 text-white/90">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-white/70">
      {questions.map((q, index) => (
        <li key={index}>{q}</li>
      ))}
    </ul>
  </div>
);

export default AimlIq;
