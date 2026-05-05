function BMICalculator(){
    const name=useRef(null);
    const age=useRef(0);
    const height=useRef(0);
    const weight=useRef(0);
    const res=useRef(0);
    function handleClick(){
        let bmi;
        bmi=weight/(height*height);
        res.current.value=bmi;
    }
    <form>
        <label>Name:</label>
        <input type="text" ref={name} value={name.current.value}/>
    </form>
}