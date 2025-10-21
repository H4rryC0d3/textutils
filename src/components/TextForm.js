import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleCopy= () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleCapitalize = () => {
    let newText = text.split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
    setText(newText);
    props.showAlert("Text capitalized!", "success");
  }

  const buttonStyle = (index) => ({
    background: hoveredButton === index 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '25px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    transform: hoveredButton === index ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
    boxShadow: hoveredButton === index 
      ? '0 10px 25px rgba(102, 126, 234, 0.5)'
      : '0 4px 15px rgba(102, 126, 234, 0.3)',
    cursor: 'pointer',
    opacity: text.length === 0 ? 0.5 : 1,
  });

  const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? '#1a1a2e' : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743',
    border: `2px solid ${props.mode === 'dark' ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`,
    borderRadius: '15px',
    padding: '20px',
    fontSize: '1.05rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    resize: 'vertical',
  };

  const statsCardStyle = {
    background: props.mode === 'dark' 
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
    padding: '25px',
    borderRadius: '15px',
    border: `2px solid ${props.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  };

  const statItemStyle = {
    display: 'inline-block',
    padding: '15px 25px',
    margin: '10px',
    background: props.mode === 'dark' ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
    borderRadius: '12px',
    border: `2px solid ${props.mode === 'dark' ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`,
    transition: 'all 0.3s ease',
  };

  const previewBoxStyle = {
    background: props.mode === 'dark' ? '#1a1a2e' : '#f8f9fa',
    padding: '25px',
    borderRadius: '15px',
    border: `2px solid ${props.mode === 'dark' ? 'rgba(102, 126, 234, 0.2)' : 'rgba(0,0,0,0.05)'}`,
    minHeight: '150px',
    maxHeight: '300px',
    overflowY: 'auto',
    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)',
    lineHeight: '1.8',
    fontSize: '1.05rem',
  };

  const wordCount = text.split(/\s+/).filter((element)=> element.length !== 0).length;
  const charCount = text.length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <>
    <style>
      {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease forwards;
        }

        .stat-item:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
        }

        textarea:focus {
          outline: none;
          border-color: rgba(102, 126, 234, 0.6) !important;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.4) !important;
        }

        .preview-box::-webkit-scrollbar {
          width: 8px;
        }

        .preview-box::-webkit-scrollbar-track {
          background: ${props.mode === 'dark' ? '#1a1a2e' : '#f1f1f1'};
          border-radius: 10px;
        }

        .preview-box::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        .preview-box::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
      `}
    </style>

    <div className="container animate-fade-in" style={{color: props.mode==='dark'? 'white':'#042743', paddingTop: '30px'}}>
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: '800',
          fontSize: '2.5rem',
          marginBottom: '10px'
        }}>
          {props.heading}
        </h1>
        <p style={{fontSize: '1.1rem', opacity: 0.8}}>
          Transform your text with powerful utilities
        </p>
      </div>

      <div className="mb-4">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          style={textareaStyle}
          id="myBox" 
          rows="8"
          placeholder="Start typing or paste your text here..."
        ></textarea>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <button 
          disabled={text.length===0}
          className="btn mx-1 my-1" 
          onClick={handleUpClick}
          onMouseEnter={() => setHoveredButton(1)}
          onMouseLeave={() => setHoveredButton(null)}
          style={buttonStyle(1)}
        >
          🔤 UPPERCASE
        </button>
        <button 
          disabled={text.length===0}
          className="btn mx-1 my-1" 
          onClick={handleLoClick}
          onMouseEnter={() => setHoveredButton(2)}
          onMouseLeave={() => setHoveredButton(null)}
          style={buttonStyle(2)}
        >
          🔡 lowercase
        </button>
        <button 
          disabled={text.length===0}
          className="btn mx-1 my-1" 
          onClick={handleCapitalize}
          onMouseEnter={() => setHoveredButton(3)}
          onMouseLeave={() => setHoveredButton(null)}
          style={buttonStyle(3)}
        >
          ✨ Capitalize
        </button>
        <button 
          disabled={text.length===0}
          className="btn mx-1 my-1" 
          onClick={handleCopy}
          onMouseEnter={() => setHoveredButton(4)}
          onMouseLeave={() => setHoveredButton(null)}
          style={buttonStyle(4)}
        >
          📋 Copy Text
        </button>
        <button 
          disabled={text.length===0}
          className="btn mx-1 my-1" 
          onClick={handleExtraSpaces}
          onMouseEnter={() => setHoveredButton(5)}
          onMouseLeave={() => setHoveredButton(null)}
          style={buttonStyle(5)}
        >
          🔧 Remove Spaces
        </button>
        <button 
          disabled={text.length===0}
          className="btn mx-1 my-1" 
          onClick={handleClearClick}
          onMouseEnter={() => setHoveredButton(6)}
          onMouseLeave={() => setHoveredButton(null)}
          style={buttonStyle(6)}
        >
          🗑️ Clear Text
        </button>
      </div>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <div style={statsCardStyle}>
          <h2 style={{
            marginBottom: '25px',
            fontWeight: '700',
            textAlign: 'center',
            fontSize: '1.8rem'
          }}>
            📊 Text Summary
          </h2>
          
          <div style={{textAlign: 'center'}}>
            <div className="stat-item" style={statItemStyle}>
              <div style={{fontSize: '2rem', fontWeight: '800', color: '#667eea'}}>
                {wordCount}
              </div>
              <div style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '5px'}}>
                Words
              </div>
            </div>

            <div className="stat-item" style={statItemStyle}>
              <div style={{fontSize: '2rem', fontWeight: '800', color: '#764ba2'}}>
                {charCount}
              </div>
              <div style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '5px'}}>
                Characters
              </div>
            </div>

            <div className="stat-item" style={statItemStyle}>
              <div style={{fontSize: '2rem', fontWeight: '800', color: '#667eea'}}>
                {readingTime}
              </div>
              <div style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '5px'}}>
                Minutes Read
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{
            marginBottom: '20px',
            fontWeight: '700',
            fontSize: '1.8rem'
          }}>
            👁️ Preview
          </h2>
          <div className="preview-box" style={previewBoxStyle}>
            {text.length > 0 ? text : (
              <span style={{opacity: 0.5, fontStyle: 'italic'}}>
                Nothing to preview yet. Start typing above!
              </span>
            )}
          </div>
        </div>
     </div>
    </>
  )
}
