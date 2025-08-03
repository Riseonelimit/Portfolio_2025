import React, { useState, useEffect } from "react";

type ActivityType =
    | "coding"
    | "coffee"
    | "debugging"
    | "meeting"
    | "learning"
    | "sleeping"
    | "gaming"
    | "weekend"
    | "night_coding"
    | "lunch";

interface Activity {
    icon: string;
    pixel: string;
    messages: string[];
}

// Activity types with corresponding icons and messages
const ACTIVITIES: Record<ActivityType, Activity> = {
    coding: {
        icon: "👨‍💻",
        pixel: "🟦🟦🟦\n🟫🟫🟫\n🟪🟪🟪",
        messages: [
            "Turning coffee into code ☕→💻",
            "Making the impossible possible",
            "Debugging life, one console.log at a time",
            "Currently in the zone 🎯",
            "Building the future, one commit at a time",
        ],
    },
    coffee: {
        icon: "☕",
        pixel: "🟫🟫🟫\n🤍🤍🤍\n🟫🟫🟫",
        messages: [
            "Refueling the developer engine ⛽",
            "Converting caffeine to productivity",
            "Coffee break = thinking time ☕💭",
            "Mandatory java (not the language) break",
        ],
    },
    debugging: {
        icon: "🐛",
        pixel: "🔴🔴🔴\n🟡🟡🟡\n🔴🔴🔴",
        messages: [
            "Hunting bugs in their natural habitat 🔍",
            "99 little bugs in the code...",
            "Error 404: Bug not found (yet)",
            "Debugging: The art of removing bugs",
        ],
    },
    meeting: {
        icon: "📹",
        pixel: "🟦🟦🟦\n⚫⚫⚫\n🟦🟦🟦",
        messages: [
            "In a meeting (probably could be an email)",
            "Explaining why the website isn't 'just' changing colors",
            "Yes, I can hear you now 📞",
            "Camera on, brain loading... 💭",
        ],
    },
    learning: {
        icon: "📚",
        pixel: "🟫🟫🟫\n📄📄📄\n🟫🟫🟫",
        messages: [
            "Learning something new (again) 🧠",
            "Today's rabbit hole: Advanced React patterns",
            "Documentation is my best friend 📖",
            "Stack Overflow University in session",
        ],
    },
    sleeping: {
        icon: "😴",
        pixel: "🌙🌙🌙\n💤💤💤\n⭐⭐⭐",
        messages: [
            "Sleeping (probably dreaming about code)",
            "Offline for mandatory human maintenance 🔧",
            "Recharging developer batteries 🔋",
            "Even developers need sleep... sometimes",
        ],
    },
    gaming: {
        icon: "🎮",
        pixel: "🟪🟪🟪\n🟢🟢🟢\n🟪🟪🟪",
        messages: [
            "Gaming break (for inspiration, obviously)",
            "Studying UX/UI in interactive environments 🎯",
            "Research into user engagement patterns",
            "Achievement unlocked: Procrastination Master",
        ],
    },
    weekend: {
        icon: "🏖️",
        pixel: "🟨🟨🟨\n🟦🟦🟦\n🟫🟫🟫",
        messages: [
            "Weekend side projects are the best projects",
            "Free time = More coding time 😅",
            "Weekends: When fun projects come alive",
            "Working on passion projects ❤️",
        ],
    },
    night_coding: {
        icon: "🌙",
        pixel: "🌙⭐🌙\n💻💻💻\n⚫⚫⚫",
        messages: [
            "Night owl mode activated 🦉",
            "When normal people sleep, I code",
            "3AM thoughts hitting different",
            "The code flows better at midnight ✨",
        ],
    },
    lunch: {
        icon: "🍕",
        pixel: "🟡🟡🟡\n🔴🔴🔴\n🟫🟫🟫",
        messages: [
            "Lunch break (probably still thinking about code)",
            "Fueling the developer machine 🔋",
            "Food for thought (and for coding)",
            "Eating while reviewing pull requests",
        ],
    },
};

const getCurrentActivity = (): ActivityType => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const minute = now.getMinutes();

    // Weekend activities
    if (day === 0 || day === 6) {
        if (hour >= 22 || hour <= 7) return "sleeping";
        if (hour >= 10 && hour <= 12) return "coffee";
        if (hour >= 20 && hour <= 22) return "gaming";
        return "weekend";
    }

    // Weekday activities
    if (hour >= 23 || hour <= 6) return "sleeping";
    if (hour >= 22 && hour <= 23) return "night_coding";
    if ((hour === 9 && minute <= 30) || (hour === 14 && minute <= 15))
        return "coffee";
    if (hour === 12 || hour === 13) return "lunch";
    if ((hour === 10 || hour === 15) && minute >= 30) return "meeting";
    if (hour >= 16 && hour <= 17) return "learning";
    if (hour >= 9 && hour <= 11) return "coding";
    if (hour >= 14 && hour <= 16) return "debugging";
    if (hour >= 17 && hour <= 19) return "coding";

    return "coding"; // Default activity
};

interface StatusActivityProps {
    isVisible: boolean;
    onClose: () => void;
}

const StatusActivity: React.FC<StatusActivityProps> = ({
    isVisible,
    onClose,
}) => {
    const [currentActivity, setCurrentActivity] = useState(
        getCurrentActivity()
    );
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const updateActivity = () => {
            const newActivity = getCurrentActivity();
            setCurrentActivity(newActivity);

            const now = new Date();
            setTimeString(
                now.toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "numeric",
                    minute: "2-digit",
                })
            );
        };

        updateActivity();
        const interval = setInterval(updateActivity, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const messages = ACTIVITIES[currentActivity].messages;
            const randomIndex = Math.floor(Math.random() * messages.length);
            setCurrentMessageIndex(randomIndex);
        }
    }, [isVisible, currentActivity]);

    if (!isVisible) return null;

    const activity = ACTIVITIES[currentActivity];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-6 max-w-md w-full font-mono text-green-400 relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors text-xl"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="text-xl font-bold mb-2 text-green-300">
                        STATUS UPDATE
                    </h2>
                    <div className="text-xs text-gray-400">
                        Current Time: {timeString}
                    </div>
                </div>

                {/* Activity Icon */}
                <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{activity.icon}</div>
                    <div className="bg-gray-800 p-2 rounded border border-gray-600 inline-block">
                        <div className="text-xs font-mono whitespace-pre-line leading-tight">
                            {activity.pixel}
                        </div>
                    </div>
                </div>

                {/* Activity Message */}
                <div className="bg-gray-800 p-4 rounded border border-gray-600 mb-4">
                    <div className="text-sm text-center">
                        <div className="text-yellow-300 mb-2">Currently:</div>
                        <div className="text-white">
                            {activity.messages[currentMessageIndex]}
                        </div>
                    </div>
                </div>

                {/* Activity Details */}
                <div className="text-xs text-gray-400 text-center space-y-1">
                    <div>
                        Activity:{" "}
                        <span className="text-green-300">
                            {currentActivity.replace("_", " ").toUpperCase()}
                        </span>
                    </div>
                    <div>
                        Accuracy: <span className="text-yellow-300">~85%</span>{" "}
                        (AI-powered guess)
                    </div>
                    <div className="text-gray-500 mt-2">
                        💡 This updates based on time patterns and developer
                        habits
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-4 pt-3 border-t border-gray-700">
                    <div className="text-xs text-gray-400">
                        Real-time status monitoring system v1.0
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusActivity;
