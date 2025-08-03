import React from "react";
import { useAppContext } from "../hooks/useAppContext";

interface DeveloperConsoleProps {
    isVisible: boolean;
    onClose: () => void;
}

// Type for Chrome's performance.memory API
interface PerformanceMemory {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
}

const DeveloperConsole: React.FC<DeveloperConsoleProps> = ({
    isVisible,
    onClose,
}) => {
    const {
        techArray,
        isProjectHovered,
        isRecruiterMode,
        setIsRecruiterMode,
        setIsStatusActivityOpen,
    } = useAppContext();

    const debugInfo = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        screen: {
            width: window.screen.width,
            height: window.screen.height,
        },
        location: window.location.href,
        appState: {
            techArray,
            isProjectHovered,
            isRecruiterMode,
        },
        performance: {
            loadTime:
                performance.timing.loadEventEnd -
                performance.timing.navigationStart,
            domReady:
                performance.timing.domContentLoadedEventEnd -
                performance.timing.navigationStart,
        },
        memory:
            "memory" in performance && performance.memory
                ? {
                      used:
                          Math.round(
                              ((performance.memory as PerformanceMemory)
                                  .usedJSHeapSize /
                                  1024 /
                                  1024) *
                                  100
                          ) / 100,
                      total:
                          Math.round(
                              ((performance.memory as PerformanceMemory)
                                  .totalJSHeapSize /
                                  1024 /
                                  1024) *
                                  100
                          ) / 100,
                      limit:
                          Math.round(
                              ((performance.memory as PerformanceMemory)
                                  .jsHeapSizeLimit /
                                  1024 /
                                  1024) *
                                  100
                          ) / 100,
                  }
                : "Not available",
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 text-green-400 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden font-mono text-sm">
                {/* Header */}
                <div className="bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="ml-2 text-gray-300">
                            Developer Console
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto max-h-[calc(90vh-60px)]">
                    <div className="space-y-4">
                        {/* Welcome Message */}
                        <div className="border border-green-500 p-3 rounded">
                            <p className="text-green-300">
                                🎉 Secret Developer Console Activated!
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                You found the easter egg by typing "dev"
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-gray-800 p-3 rounded">
                            <h3 className="text-yellow-400 mb-2">
                                ⚡ Quick Actions
                            </h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() =>
                                        setIsRecruiterMode(!isRecruiterMode)
                                    }
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-colors"
                                >
                                    Toggle Recruiter Mode:{" "}
                                    {isRecruiterMode ? "ON" : "OFF"}
                                </button>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "mailto:anandrise2048@gmail.com"
                                        )
                                    }
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs transition-colors ml-2"
                                >
                                    Quick Contact
                                </button>
                                <button
                                    onClick={() =>
                                        setIsStatusActivityOpen(true)
                                    }
                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition-colors ml-2"
                                >
                                    Check My Status 🕐
                                </button>
                            </div>
                        </div>

                        {/* System Information */}
                        <div className="bg-gray-800 p-3 rounded">
                            <h3 className="text-yellow-400 mb-2">
                                💻 System Information
                            </h3>
                            <pre className="text-xs space-y-1">
                                <div>
                                    <span className="text-blue-400">
                                        Timestamp:
                                    </span>{" "}
                                    {debugInfo.timestamp}
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        Location:
                                    </span>{" "}
                                    {debugInfo.location}
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        Viewport:
                                    </span>{" "}
                                    {debugInfo.viewport.width} x{" "}
                                    {debugInfo.viewport.height}
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        Screen:
                                    </span>{" "}
                                    {debugInfo.screen.width} x{" "}
                                    {debugInfo.screen.height}
                                </div>
                            </pre>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-gray-800 p-3 rounded">
                            <h3 className="text-yellow-400 mb-2">
                                ⚡ Performance
                            </h3>
                            <pre className="text-xs space-y-1">
                                <div>
                                    <span className="text-blue-400">
                                        Load Time:
                                    </span>{" "}
                                    {debugInfo.performance.loadTime}ms
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        DOM Ready:
                                    </span>{" "}
                                    {debugInfo.performance.domReady}ms
                                </div>
                                {typeof debugInfo.memory === "object" && (
                                    <>
                                        <div>
                                            <span className="text-blue-400">
                                                Memory Used:
                                            </span>{" "}
                                            {debugInfo.memory.used}MB
                                        </div>
                                        <div>
                                            <span className="text-blue-400">
                                                Memory Total:
                                            </span>{" "}
                                            {debugInfo.memory.total}MB
                                        </div>
                                        <div>
                                            <span className="text-blue-400">
                                                Memory Limit:
                                            </span>{" "}
                                            {debugInfo.memory.limit}MB
                                        </div>
                                    </>
                                )}
                            </pre>
                        </div>

                        {/* App State */}
                        <div className="bg-gray-800 p-3 rounded">
                            <h3 className="text-yellow-400 mb-2">
                                🔧 Application State
                            </h3>
                            <pre className="text-xs">
                                {JSON.stringify(debugInfo.appState, null, 2)}
                            </pre>
                        </div>

                        {/* Browser Info */}
                        <div className="bg-gray-800 p-3 rounded">
                            <h3 className="text-yellow-400 mb-2">
                                🌐 Browser Information
                            </h3>
                            <pre className="text-xs break-all">
                                <div>
                                    <span className="text-blue-400">
                                        User Agent:
                                    </span>
                                </div>
                                <div className="pl-2 text-gray-300">
                                    {debugInfo.userAgent}
                                </div>
                            </pre>
                        </div>

                        {/* Easter Egg Info */}
                        <div className="bg-gray-800 p-3 rounded">
                            <h3 className="text-yellow-400 mb-2">
                                🥚 Easter Egg Info
                            </h3>
                            <div className="text-xs space-y-1">
                                <div>
                                    <span className="text-blue-400">
                                        Developer Console:
                                    </span>{" "}
                                    Type "dev" anywhere on the page
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        Status Activity:
                                    </span>{" "}
                                    Type "status" to see what I'm doing right
                                    now
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        Auto-close:
                                    </span>{" "}
                                    Console after 30s, Status after 15s
                                </div>
                                <div>
                                    <span className="text-blue-400">
                                        Created by:
                                    </span>{" "}
                                    Anand Sarolkar
                                </div>
                                <div className="text-gray-400 mt-2">
                                    More easter eggs coming soon... 🎮
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperConsole;
