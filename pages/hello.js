import React from 'react'

const hello = () => {
  return (
    <div className="container">
      <h1>My Next.js Design</h1>
      <p>This is a simple design with buttons and more.</p>

      <div className="button-container">
        <button className="primary-button">Primary Button</button>
        <button className="secondary-button">Secondary Button</button>
      </div>

      <div className="other-elements">
        <div className="box">
          <p>Box 1</p>
        </div>
        <div className="box">
          <p>Box 2</p>
        </div>
        <div className="box">
          <p>Box 3</p>
        </div>
      </div>
      
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .primary-button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .secondary-button {
          background-color: #f8f9fa;
          color: #333;
          padding: 10px 20px;
          border: 1px solid #ccc;
          cursor: pointer;
          border-radius: 5px;
        }

        .other-elements {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .box {
          width: 100px;
          height: 100px;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export default hello
