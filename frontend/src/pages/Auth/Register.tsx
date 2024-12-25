import AuthLayout from "../../layouts/Auth";

const RegisterPage = () => {
    return (
        <>
            <AuthLayout>
                <form className="w-3/5 gap-4">
                    <h4 className="text-4xl font-semibold text-center">Selamat Datang di Toko Kami</h4>
                    <p className="mt-2 text-lg text-center">Dapatkan pengalaman belanja yang menyenangkan di palform ini</p>
                    <div className="input__group flex flex-col gap-2 mt-4">
                        <label htmlFor="name">Nama</label>
                        <input type="text" id="name" name="name" className="border border-black py-2 rounded-md px-2.5" placeholder="Masukkan nama Anda" />
                    </div>
                    <div className="input__group flex flex-col gap-2 mt-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" className="border border-black py-2 rounded-md px-2.5" placeholder="Masukkan email Anda" />
                    </div>
                    <div className="input__group flex flex-col gap-2 mt-4">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" className="border border-black py-2 rounded-md px-2.5" placeholder="Masukkan username Anda" />
                    </div>
                    <div className="flex gap-2">
                        <div className="input__group flex flex-col gap-2 mt-4 flex-1">
                            <label htmlFor="birth_place">Tempat Lahir</label>
                            <input type="text" id="birth_place" name="birth_place" className="border border-black py-2 rounded-md px-2.5" placeholder="Masukkan tempat lahir Anda" />
                        </div>
                        <div className="input__group flex flex-col gap-2 mt-4 flex-1">
                            <label htmlFor="birth_date">Tanggal Lahir</label>
                            <input type="date" id="birth_date" name="birth_date" className="border border-black py-2 rounded-md px-2.5" placeholder="Masukkan username Anda" />
                        </div>
                    </div>
                    <div className="input__group flex flex-col gap-2 mt-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="border border-black py-2 rounded-md px-2.5" placeholder="Masukkan password Anda" />
                        <a href="/forgot-password" className="text-blue-600 text-right">Lupa Password?</a>
                    </div>
                    <button type="submit" className="py-2 w-full bg-primary-1 mt-5 text-white font-semibold">Masuk</button>
                    <p className="mt-2 flex gap-1">Sudah punya akun?
                        <a href="/login" className="text-blue-600">Login disini!</a>
                    </p>
                </form>
            </AuthLayout>
        </>
    )
}

export default RegisterPage;

