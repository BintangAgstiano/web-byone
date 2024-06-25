const PageIndex = () => {
    return (
        <>
            <section id="section1">
                <div className="navbar">
                    <span>ACARA</span>
                    <span>PEMAIN</span>
                    <div className="title">BYONE</div>
                    <span>BELI TIKET</span>
                    <span>JADWAL</span>
                </div>
            </section>
            <section id="section2">
                <div className="content">
                    <div className="left">
                        <span>WELCOME TO THE FIGHT BYONE</span>
                        <div className="line1"> <span>THE BEST </span><span>BOXING</span></div>
                        <div className="line1"> <span>INDONESIAN AND MARTIAL</span></div>
                        <div className="line1" style={{ zIndex:"5" }}> <span>ARTS IN THE WORLD</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum consectetur itaque recusandae, enim magnam iusto suscipit, quis ipsa excepturi distinctio iure eius doloribus aut, tenetur ullam earum sapiente repellat? Explicabo ut laboriosam ea quae repudiandae doloribus ullam inventore quibusdam quia illo ipsum qui magni, aperiam dignissimos? Nam, quo vel.</p>
                        <button>GET STARTED
                            <div></div>
                        </button>
                        <img src="/bg.png" alt="" />
                    </div>
                    <div className="right">
                        <img src="/randy.png" width="450" />
                        <img src="/kkje.png" width="340" />
                    </div>
                </div>
            </section>
            <section id="section3">
                <div className="suport">
                    <img src="/hotto.png" width="60" />
                    <img src="/video.png" width="60" />
                    <img src="/adidas.png" width="40" />
                    <img src="/video.png" width="60" />
                    <img src="/hotto.png" width="60" />
                    <img src="/adidas.png" width="40" />
                    <img src="/hotto.png" width="60" />
                    <img src="/video.png" width="60" />
                </div>
            </section>
        </>
    )
}
export default PageIndex