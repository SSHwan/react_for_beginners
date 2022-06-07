function Btn({text, onClick}) {
    return (
        <button
            onClick={onClick}
            style={{
                background: 'tomato',
                color: 'white',
                padding: '10px 20px',
                border: 0,
                borderRadius: 10,
                cursor: 'pointer'
            }}
        >
            {text}
        </button>
    )
}

export default Btn;