import React, { useState } from 'react'

export default function About(props) {
    const [expandedCard, setExpandedCard] = useState(null);

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    const cardStyle = (index) => ({
        ...myStyle,
        transition: 'all 0.4s ease',
        border: `2px solid ${props.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        borderRadius: '15px',
        overflow: 'hidden',
        transform: expandedCard === index ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: expandedCard === index 
            ? '0 10px 30px rgba(0,0,0,0.3)' 
            : '0 4px 15px rgba(0,0,0,0.1)',
    });

    const buttonStyle = {
        ...myStyle,
        transition: 'all 0.3s ease',
        fontWeight: '600',
        borderRadius: '10px',
        padding: '15px 20px',
    };

    const iconStyle = {
        marginRight: '12px',
        fontSize: '1.3em',
        transition: 'transform 0.3s ease',
    };

    const containerStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        minHeight: '80vh',
        padding: '30px 0',
    };

    const headerStyle = {
        background: props.mode === 'dark' 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: '800',
        fontSize: '2.5rem',
        marginBottom: '40px',
        textAlign: 'center',
        animation: 'fadeInDown 0.8s ease',
    };

    return (
        <div className="container" style={containerStyle}>
            <style>
                {`
                    @keyframes fadeInDown {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .accordion-item {
                        animation: fadeInUp 0.6s ease forwards;
                        opacity: 0;
                    }

                    .accordion-item:nth-child(1) {
                        animation-delay: 0.1s;
                    }

                    .accordion-item:nth-child(2) {
                        animation-delay: 0.2s;
                    }

                    .accordion-item:nth-child(3) {
                        animation-delay: 0.3s;
                    }

                    .accordion-button:not(.collapsed) {
                        background: ${props.mode === 'dark' ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)'} !important;
                        color: ${props.mode === 'dark' ? 'white' : '#042743'} !important;
                    }

                    .accordion-button:hover {
                        background: ${props.mode === 'dark' ? 'rgba(102, 126, 234, 0.15)' : 'rgba(102, 126, 234, 0.08)'} !important;
                    }

                    .feature-icon {
                        display: inline-block;
                        transition: transform 0.3s ease;
                    }

                    .accordion-button:hover .feature-icon {
                        transform: scale(1.2) rotate(5deg);
                    }
                `}
            </style>

            <h2 style={headerStyle}>About Us</h2>

            <div className="row mb-4">
                <div className="col-12">
                    <div style={{
                        background: props.mode === 'dark' 
                            ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
                            : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                        padding: '30px',
                        borderRadius: '15px',
                        marginBottom: '30px',
                        border: `2px solid ${props.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                        animation: 'fadeInUp 0.6s ease',
                    }}>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            margin: 0,
                            textAlign: 'center',
                        }}>
                            <strong>TextUtils</strong> is your ultimate text manipulation companion. 
                            Fast, efficient, and completely free - analyze, transform, and optimize your text in seconds.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionExample">
                <div 
                    className="accordion-item mb-3" 
                    style={cardStyle(1)}
                    onMouseEnter={() => setExpandedCard(1)}
                    onMouseLeave={() => setExpandedCard(null)}
                >
                    <h2 className="accordion-header" id="headingOne">
                        <button 
                            className="accordion-button" 
                            style={buttonStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                        >
                            <span className="feature-icon" style={iconStyle}>📊</span>
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2> 
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{
                            padding: '25px',
                            lineHeight: '1.8',
                            fontSize: '1.05rem',
                        }}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Get instant insights with word count, 
                            character count, reading time estimates, and more. Perfect for writers, students, and professionals who need 
                            precise text statistics.
                        </div>
                    </div>
                </div> 

                <div 
                    className="accordion-item mb-3" 
                    style={cardStyle(2)}
                    onMouseEnter={() => setExpandedCard(2)}
                    onMouseLeave={() => setExpandedCard(null)}
                >
                    <h2 className="accordion-header" id="headingTwo">
                        <button 
                            className="accordion-button collapsed" 
                            style={buttonStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                        >
                            <span className="feature-icon" style={iconStyle}>💎</span>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{
                            padding: '25px',
                            lineHeight: '1.8',
                            fontSize: '1.05rem',
                        }}>
                            TextUtils is a completely free character counter tool that provides instant character count & word count 
                            statistics for any given text. Get detailed reports on word and character counts, making it ideal for 
                            writing content with specific word or character limits. No registration, no fees, just pure functionality.
                        </div>
                    </div>
                </div>

                <div 
                    className="accordion-item mb-3" 
                    style={cardStyle(3)}
                    onMouseEnter={() => setExpandedCard(3)}
                    onMouseLeave={() => setExpandedCard(null)}
                >
                    <h2 className="accordion-header" id="headingThree">
                        <button 
                            className="accordion-button collapsed" 
                            style={buttonStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                        >
                            <span className="feature-icon" style={iconStyle}>🌐</span>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{
                            padding: '25px',
                            lineHeight: '1.8',
                            fontSize: '1.05rem',
                        }}>
                            This word counter software works seamlessly in any modern web browser including Chrome, Firefox, Safari, Edge, 
                            and Opera. It's perfect for counting characters in Facebook posts, blog articles, books, Excel documents, 
                            PDF files, essays, and more. Access it anywhere, anytime, on any device.
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: '50px',
                textAlign: 'center',
                padding: '30px',
                background: props.mode === 'dark' 
                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                borderRadius: '15px',
                border: `2px solid ${props.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
            }}>
                <h4 style={{ marginBottom: '15px', fontWeight: '700' }}>Ready to transform your text?</h4>
                <p style={{ fontSize: '1.1rem', marginBottom: 0, opacity: 0.8 }}>
                    Start using TextUtils today and experience the power of efficient text analysis!
                </p>
            </div>
        </div>
    )
}
