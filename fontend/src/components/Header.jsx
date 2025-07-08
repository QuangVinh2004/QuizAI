import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="flex w-full h-[120px] items-center mx-6">
                <div>
                    <img
                        src="https://quiz.com/images/logo/quiz-multicolor.svg"
                        className="w-[320px]"
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row w-full justify-between items-center">
                        <h2 className="w-full">Join Game? Enter Pin</h2>
                        <i className="fa-solid fa-magnifying-glass text-xl ml-4"></i>
                    </div>
                </div>
            </div>
            <nav>
                <Link to="/">Trang Chủ</Link>
                <Link to="/register">Đăng Ký</Link>
                <Link to="/login">Đăng Nhập</Link>
            </nav>
        </header>
    );
}

export default Header;
