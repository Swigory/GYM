import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const styles = {
    chatContainer: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    },
    chatButton: {
      position: 'absolute',
      bottom: '0',
      right: '0',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    },
    chatWindow: {
      position: 'absolute',
      bottom: '80px',
      right: '0',
      width: '300px',
      height: '400px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
    },
    chatHeader: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '15px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    messagesContainer: {
      flex: 1,
      padding: '15px',
      overflowY: 'auto',
    },
    message: {
      marginBottom: '10px',
      padding: '8px 15px',
      borderRadius: '15px',
      maxWidth: '80%',
    },
    userMessage: {
      backgroundColor: '#007bff',
      color: 'white',
      marginLeft: 'auto',
    },
    botMessage: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
    inputContainer: {
      padding: '15px',
      borderTop: '1px solid #eee',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '20px',
      border: '1px solid #ddd',
      outline: 'none',
    },
    timestamp: {
      fontSize: '0.7rem',
      color: '#666',
      marginTop: '5px',
    }
  };

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        setMessages(prev => [...prev, message]);
      });
    }
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && socket) {
      socket.emit('message', {
        user: 'user',
        text: inputMessage
      });
      setInputMessage('');
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div style={styles.chatContainer}>
      <button 
        style={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '💬'}
      </button>

      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>
            <h3 style={{ margin: 0 }}>Fitness Assistant</h3>
          </div>
          
          <div style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(message.user === 'user' ? styles.userMessage : styles.botMessage)
                }}
              >
                {message.text}
                <div style={styles.timestamp}>
                  {formatTimestamp(message.timestamp)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form style={styles.inputContainer} onSubmit={sendMessage}>
            <input
              style={styles.input}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat; 