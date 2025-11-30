import React from 'react';

const BlockchainIq = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-blue-200 to-indigo-300 text-gray-900 py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blockchain IQ</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🟢 Beginner Level</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-2xl font-medium mb-2">Theoretical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>What is Blockchain, and how does it work?</li>
            <li>What are the key features of a blockchain?</li>
            <li>What is a block in a blockchain, and what does it contain?</li>
            <li>Explain the concept of decentralization in blockchain.</li>
            <li>What are the main differences between a public, private, and consortium blockchain?</li>
            <li>What is a node in a blockchain, and how does it participate in the network?</li>
            <li>What is the role of consensus mechanisms in blockchain technology?</li>
            <li>What is a transaction in a blockchain, and how is it validated?</li>
            <li>What is hashing, and why is it important in blockchain?</li>
            <li>What is a smart contract, and how does it work?</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium mb-2">Practical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>How do you create a simple blockchain in Python?</li>
            <li>How do you add a new block to an existing blockchain?</li>
            <li>How do you implement proof-of-work in a simple blockchain?</li>
            <li>How would you validate a blockchain in Python?</li>
            <li>How do you perform basic transactions on a blockchain (send, receive)?</li>
            <li>How would you set up a private blockchain for experimentation?</li>
            <li>How would you implement a basic smart contract using Ethereum's Solidity language?</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🟡 Intermediate Level</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-2xl font-medium mb-2">Theoretical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>What is a consensus mechanism, and what are the most common types (Proof of Work, Proof of Stake, etc.)?</li>
            <li>How does Proof of Work (PoW) work, and what are its advantages and disadvantages?</li>
            <li>What is Proof of Stake (PoS), and how does it differ from PoW?</li>
            <li>What is a blockchain wallet, and how does it interact with the blockchain?</li>
            <li>What is the significance of a public key and private key in blockchain transactions?</li>
            <li>How do blockchain networks achieve security and immutability?</li>
            <li>What are forks in a blockchain, and what is the difference between hard forks and soft forks?</li>
            <li>Explain the concept of "51% attack" and how it impacts blockchain security.</li>
            <li>What is a Merkle Tree, and why is it important in blockchain technology?</li>
            <li>What is Ethereum, and how does it differ from Bitcoin?</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium mb-2">Practical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>How do you create and deploy a smart contract on the Ethereum blockchain using Solidity?</li>
            <li>How would you set up a private Ethereum network using tools like Geth or Ganache?</li>
            <li>How do you perform a simple cryptocurrency transaction on the Ethereum blockchain using Web3.js?</li>
            <li>How would you implement a simple ICO (Initial Coin Offering) using Ethereum?</li>
            <li>How do you interact with a smart contract from a React application (using Web3.js or ethers.js)?</li>
            <li>How can you use IPFS (InterPlanetary File System) with blockchain to store data off-chain?</li>
            <li>How do you perform gas optimization in Solidity when writing smart contracts?</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🔴 Advanced Level</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-2xl font-medium mb-2">Theoretical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>What are Layer 2 scaling solutions, and why are they necessary for blockchain networks?</li>
            <li>Explain the concept of sharding in blockchain and how it improves scalability.</li>
            <li>What is a Decentralized Autonomous Organization (DAO), and how does it operate on a blockchain?</li>
            <li>How does zero-knowledge proof (ZKP) work in blockchain, and what are its use cases?</li>
            <li>How do blockchain networks handle privacy, and what technologies are used to enhance privacy (e.g., zk-SNARKs)?</li>
            <li>What are some of the key challenges with blockchain interoperability, and how can they be solved?</li>
            <li>Explain how cross-chain communication works in blockchain (e.g., Polkadot, Cosmos).</li>
            <li>What is the Byzantine Fault Tolerance (BFT) algorithm, and why is it important in blockchain consensus mechanisms?</li>
            <li>How does blockchain impact industries like supply chain, healthcare, and finance?</li>
            <li>What are some of the legal and regulatory challenges surrounding blockchain technology?</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium mb-2">Practical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>How would you design and implement a decentralized voting system using blockchain?</li>
            <li>How do you build a decentralized application (DApp) using a blockchain backend (e.g., Ethereum)?</li>
            <li>How do you optimize the performance of a blockchain network?</li>
            <li>How would you implement an ERC-20 token contract on Ethereum?</li>
            <li>How can you integrate a blockchain-based payment system in a web application using Web3.js?</li>
            <li>How do you set up a blockchain node in a test environment for development?</li>
            <li>How would you implement a cross-chain swap (atomic swap) using two different blockchain platforms?</li>
            <li>How do you handle on-chain and off-chain data in blockchain applications?</li>
            <li>What are Layer 2 solutions like Optimistic Rollups or zk-Rollups, and how do they improve scalability?</li>
            <li>How do you implement tokenization of real-world assets on the blockchain (e.g., real estate, artwork)?</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">💡 Bonus - Expert Level</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-2xl font-medium mb-2">Theoretical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>How does the implementation of a Distributed Ledger Technology (DLT) like Hyperledger differ from public blockchains?</li>
            <li>Explain the concept of a consensus algorithm such as Delegated Proof of Stake (DPoS) and its advantages over traditional PoW and PoS.</li>
            <li>How does blockchain governance work, especially in decentralized networks?</li>
            <li>How can blockchain technology be used for identity management and authentication?</li>
            <li>What are blockchain oracles, and how do they bridge the gap between off-chain data and on-chain operations?</li>
            <li>How do you prevent Sybil attacks in decentralized networks?</li>
            <li>How does a blockchain handle transaction throughput and latency, and what are the trade-offs between them?</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium mb-2">Practical Questions</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>How would you build a supply chain management system using blockchain for real-time tracking of goods?</li>
            <li>How do you implement a privacy-preserving transaction mechanism on a public blockchain (e.g., Monero, Zcash)?</li>
            <li>How would you optimize a blockchain for high throughput and low latency in a large-scale production environment?</li>
            <li>How do you ensure the integrity of data when using blockchain in a healthcare application?</li>
            <li>How would you integrate a hybrid blockchain solution combining both private and public blockchains?</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default BlockchainIq;
