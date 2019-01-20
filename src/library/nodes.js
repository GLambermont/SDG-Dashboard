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

export {
    getUniqueNodes
}