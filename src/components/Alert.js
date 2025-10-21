import React, { useState, useEffect } from 'react'

function Alert(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        if (props.alert) {
            setIsVisible(true);
            setIsLeaving(false);
        }
    }, [props.alert]);

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    const getAlertIcon = (type) => {
        const icons = {
            success: '✓',
            danger: '✕',
            warning: '⚠',
            info: 'ℹ',
            primary: '★'
        };
        return icons[type] || 'ℹ';
    }

    const getAlertColor = (type) => {
        const colors = {
            success: { bg: '#10b981', border: '#059669', shadow: 'rgba(16, 185, 129, 0.4)' },
            danger: { bg: '#ef4444', border: '#dc2626', shadow: 'rgba(239, 68, 68, 0.4)' },
            warning: { bg: '#f59e0b', border: '#d97706', shadow: 'rgba(245, 158, 11, 0.4)' },
            info: { bg: '#3b82f6', border: '#2563eb', shadow: 'rgba(59, 130, 246, 0.4)' },
            primary: { bg: '#8b5cf6', border: '#7c3aed', shadow: 'rgba(139, 92, 246, 0.4)' }
        };
        return colors[type] || colors.info;
    }

    const alertColors = props.alert ? getAlertColor(props.alert.type) : null;

    const alertStyle = {
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 9999,
        minWidth: '320px',
        maxWidth: '450px',
        background: alertColors ? `linear-gradient(135deg, ${alertColors.bg} 0%, ${alertColors.border} 100%)` : 'transparent',
        color: 'white',
        padding: '16px 20px',
        borderRadius: '12px',
        boxShadow: alertColors ? `0 8px 25px ${alertColors.shadow}` : 'none',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        animation: isLeaving ? 'slideOut 0.3s ease forwards' : 'slideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        backdropFilter: 'blur(10px)',
        transform: isVisible ? 'translateX(0)' : 'translateX(500px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.3s ease',
    };

    const iconStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        background: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        animation: 'iconPop 0.5s ease',
    };

    const contentStyle = {
        flex: 1,
        fontSize: '15px',
        lineHeight: '1.5',
    };

    const closeButtonStyle = {
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'none',
        color: 'white',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        transition: 'all 0.3s ease',
        flexShrink: 0,
    };

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    return (
        <>
            <style>
                {`
                    @keyframes slideIn {
                        from {
                            transform: translateX(500px);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    @keyframes slideOut {
                        from {
                            transform: translateX(0);
                            opacity: 1;
                        }
                        to {
                            transform: translateX(500px);
                            opacity: 0;
                        }
                    }

                    @keyframes iconPop {
                        0% {
                            transform: scale(0);
                            opacity: 0;
                        }
                        50% {
                            transform: scale(1.2);
                        }
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }

                    @keyframes progress {
                        from {
                            width: 100%;
                        }
                        to {
                            width: 0%;
                        }
                    }

                    .alert-close-btn:hover {
                        background: rgba(255, 255, 255, 0.35) !important;
                        transform: scale(1.1);
                    }

                    .progress-bar {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 4px;
                        background: rgba(255, 255, 255, 0.6);
                        animation: progress 3s linear forwards;
                        border-radius: 0 0 12px 12px;
                    }

                    @media (max-width: 768px) {
                        .custom-alert {
                            right: 10px !important;
                            left: 10px !important;
                            min-width: auto !important;
                            max-width: none !important;
                        }
                    }
                `}
            </style>

            {props.alert && isVisible && (
                <div className="custom-alert" style={alertStyle} role="alert">
                    <div style={iconStyle}>
                        {getAlertIcon(props.alert.type)}
                    </div>
                    
                    <div style={contentStyle}>
                        <strong style={{ fontSize: '16px', marginRight: '6px' }}>
                            {capitalize(props.alert.type)}:
                        </strong>
                        {props.alert.msg}
                    </div>

                    <button
                        className="alert-close-btn"
                        style={closeButtonStyle}
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <div className="progress-bar"></div>
                </div>
            )}
        </>
    )
}

export default Alert
