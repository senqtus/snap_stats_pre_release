import React, {useState} from 'react'
import tricky from './static/tricky.gif'


function EmailSignUp() {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      setEmail('');
    };
    return (
        <>
        <div className="bg-background_color flex items-center justify-center mb-10">
          {/* Central Container */}
          <div className="font-mono text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white">
              Stay Updated
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center m-10">
          <form onSubmit={handleSubmit} className="w-2/6 flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="flex-grow px-4 py-2 rounded bg-gray-100 focus:outline-none mr-2"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-orange-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </>
    );
  }


export default EmailSignUp;
