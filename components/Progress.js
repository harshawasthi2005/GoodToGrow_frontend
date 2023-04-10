
export default function Progress(){
   
    const containerStyles={
        width:'100%',
        height:20,
        borderRadius: 50,
        backgroundColor:"#e0e0de"
    }
    const fillerStyles={
        height: '100%',
        width: '65%',
        backgroundColor: '#6a1b9a',
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    const labelStyles={
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }
    return(
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>65%</span>
      </div>
    </div>
    )
}