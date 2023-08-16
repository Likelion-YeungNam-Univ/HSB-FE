import React from 'react';
import Header from "../components/Header";
import QuoteCreationForm from "../components/QuoteCreation/QuoteCreationForm";

const QuoteCreationPage = () => {
    const handleSubmit = ({ title, content }) => {
        // 여기에 견적 요청 제출 로직을 추가하세요.
        // 서버로 데이터를 보내거나, 로컬 스토리지에 저장할 수 있습니다.

        alert("견적요청이 제출되었습니다!");
    };

    return (
        <div>
            <Header />
            <main style={{ width: '900px', margin: '0 auto' }}>
                <QuoteCreationForm onSubmit={handleSubmit} />
            </main>
        </div>
    )
}

export default QuoteCreationPage;
