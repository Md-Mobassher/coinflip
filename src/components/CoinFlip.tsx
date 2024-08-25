import React, { useState, useRef } from "react";
import classNames from "classnames";

const CoinFlip: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [betAmount, setBetAmount] = useState<string>("");
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const animationTimeoutRef = useRef<number | null>(null);

  const connectWallet = async () => {
    // Check if window.ethereum exists
    if (typeof window.ethereum !== "undefined" && window.ethereum.request) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert(
        "MetaMask is not installed or accessible. Please install it to use this app."
      );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const flipCoin = async (_side: "heads" | "tails") => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    setIsFlipping(true);
    setShowResult(false);

    // Simulate the coin flip animation duration (e.g., 2 seconds)
    const animationDuration = 2000;

    animationTimeoutRef.current = window.setTimeout(() => {
      const flipResult = Math.random() < 0.5 ? "heads" : "tails";

      setTimeout(() => {
        setIsFlipping(false);
        setShowResult(true);
        setResult(flipResult);
      }, 0); // Delay to ensure the result is set after animation
    }, animationDuration);
  };

  // Cleanup the timeout on unmount
  React.useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Coin Flip Game</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-md">
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-full"
        >
          {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
        </button>

        <input
          type="text"
          placeholder="Enter amount to bet"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded"
        />

        <div className="flex justify-between">
          <button
            onClick={() => flipCoin("heads")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2 mr-2"
            disabled={isFlipping}
          >
            Bet on Heads
          </button>
          <button
            onClick={() => flipCoin("tails")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2 ml-2"
            disabled={isFlipping}
          >
            Bet on Tails
          </button>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div
            className={classNames("coin", {
              "flip-heads": isFlipping && result === "heads",
              "flip-tails": isFlipping && result === "tails",
              "coin-heads": !isFlipping && result === "heads",
              "coin-tails": !isFlipping && result === "tails",
            })}
          >
            <div className="coin-face coin-tails">TAILS</div>
            <div className="coin-face coin-heads">HEADS</div>
          </div>
        </div>

        <div className="mt-5 h-8">
          {showResult && result && (
            <p className="text-center text-xl font-bold ">
              Result : {result === "heads" ? "Heads" : "Tails"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
