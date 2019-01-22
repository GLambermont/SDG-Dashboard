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

const prepareData = (nodeData) => {
    let data = {labels: [], datasets: [{
        label: "Sensor Waarde",
        data: []
    }]}
    let i = 0
    for (i = 0; i < nodeData.length; i++) {
        data.labels.push(nodeData[i].sensor_time)
        data.datasets[0].data.push(nodeData[i].sensor_data);
    }
    return data
}

export {
    getUniqueNodes,
    prepareData
}