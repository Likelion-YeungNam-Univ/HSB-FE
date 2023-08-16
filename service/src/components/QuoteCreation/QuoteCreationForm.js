import React, { useState } from 'react';

function QuoteCreationForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content, year, month, day });
  };

  return (
    <div style={{ width: '940px' }}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <label htmlFor="year" style={{ fontSize: '16px', marginRight: '8px' }}>기간</label>
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              style={{ padding: '4px', fontSize: '13px', marginRight: '4px', width: '60px', border: '1px solid #AEAEAE' }}
            />
            <span>년</span>
            <input
              type="number"
              id="month"
              name="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              style={{ padding: '4px', fontSize: '13px', margin: '0 4px', width: '40px', border: '1px solid #AEAEAE' }}
            />
            <span>월</span>
            <input
              type="number"
              id="day"
              name="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              style={{ padding: '4px', fontSize: '13px', width: '40px', border: '1px solid #AEAEAE' }}
            />
            <span>일</span>
          </div>
        </div>
        <div className="input-container">
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', fontSize: '27px', marginBottom: '2px', border: 'none' }}
            placeholder="제목을 입력하세요."
            required
          />
        </div>
        <div className="input-container">
          <hr style={{ border: '1px solid #AEAEAE', margin: '16px 0' }} />
          <textarea
            id="content"
            name="content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '100%', height: '500px', padding: '8px', fontSize: '18px', resize: 'none', border: 'none' }}
            placeholder="내용을 입력하세요."
            required
          />
        </div>
        <div style={{ width: '100%', position: 'relative', marginBottom: '16px' }}>
          <div style={{ backgroundColor: '#007088', opacity: '0.02', width: '100%', height: '100px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', bottom: '30px', right: '20px' }}>
            <button type="submit" style={{ padding: '8px 20px', backgroundColor: '#95DDFF', color: '#212121', borderRadius: '4px', border: 'none' }}>
              완료
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default QuoteCreationForm;

