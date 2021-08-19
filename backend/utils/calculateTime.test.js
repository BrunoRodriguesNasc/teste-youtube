'use strict';
import calculateTime from './calculateTime';
const DAYS_DURATION_FOR_VIDEO = [20,10,30,10,10,10,10];
const VIDEO_DURATION = [20,10,30,10,10,10,10]

const valueCalc = calculateTime(DAYS_DURATION_FOR_VIDEO,VIDEO_DURATION);    
test('calculaTime expect 7 days ', () => {
    expect(valueCalc).toBe(7)
})

test('calculaTime expect 7 days ', () => {
    expect(valueCalc).toEqual(7)
})
