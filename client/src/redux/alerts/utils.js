export const GET_ALL_ALERTS_URL = "/alerts/all";
export const POST_ALERT_URL = "/alerts";
export const PUT_ALERT_URL = "/alerts";
export const DELETE_ALERT_URL= "/alerts";
export const FIND_ALERT_URL= "/alerts";
export const SEND_EMAIL_URL = "/alerts/sendEmail";

export function filterAlerts(array,building,importance,since,upTo) {
    let result;
    
    if (building !== 'All' && importance === 'All') {
        result = array.filter(s => s.building.name === building)
        .filter(s => {
            return new Date(s.date) >= since;
        })
        .filter(s => new Date(s.date) <= upTo)
        return result
    }

    if (importance !== 'All' && building === 'All') {
        result = array.filter(s => s.importance === importance)
        .filter(s => {
            return new Date(s.date) >= since;
        })
        .filter(s => new Date(s.date) <= upTo)
        return result
    }

    if (building !== 'All' && importance !== 'All') {
        result = array.filter(s => s.building.name === building)
        .filter(s => s.importance === importance)
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
