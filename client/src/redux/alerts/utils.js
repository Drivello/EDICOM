export const GET_ALL_ALERTS_URL = "http://localhost:3001/alerts/all";
export const POST_ALERT_URL = "http://localhost:3001/alerts";
export const PUT_ALERT_URL = "http://localhost:3001/alerts";
export const DELETE_ALERT_URL= "http://localhost:3001/alerts";
export const FIND_ALERT_URL= "http://localhost:3001/alerts";

export function filterAlerts(array,building,importance,since,upTo) {
    let result;
    
    if (building !== 'All') {
        alert("entre en building")
        result = array.filter(s => s.building.name === building)
        .filter(s => {
            return new Date(s.date) >= since;
        })
        .filter(s => new Date(s.date) <= upTo)
        return result
    }

    if (importance !== 'All') {
        result = array.filter(s => s.importance === importance)
        .filter(s => {
            return new Date(s.date) >= since;
        })
        .filter(s => new Date(s.date) <= upTo)
        return result
    }

    result = array.filter(s => {
        return new Date(s.date) >= since;
    })
    .filter(s => new Date(s.date) <= upTo)
    return result
}
