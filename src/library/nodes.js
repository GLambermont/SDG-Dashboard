const getUniqueNodes = (nodeData) => {
    let data = []
    let i = 0
    for(i = 0; i < 12; i++) {
        if (!data.includes(nodeData[i].sensor_id)) {
            data.push(nodeData[i].sensor_id)
        }
    }
    return data
}

const prepareData = (nodeData, max = 12000) => {
    nodeData.reverse()
    let data = {labels: [], datasets: [{
        label: "Sensor Waarde",
        data: []
    }]}
    data.datasets[0].backgroundColor = "rgba(190, 144, 212, .3)" 
    for (let i = 0; i < nodeData.length; i++) {
        if(max > 0) {
            max--
            data.labels.push(nodeData[i].sensor_time)
            data.datasets[0].data.push(nodeData[i].sensor_data)
        }
    }
    nodeData.reverse()
    data.labels.reverse()
    data.datasets[0].data.reverse()
    return data
}

export {
    getUniqueNodes,
    prepareData
}