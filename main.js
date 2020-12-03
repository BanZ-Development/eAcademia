function value(str)
{
    let get = document.getElementById(str).value;
    return get;
}

function findSlope()
{
    let x1 = value('q1x1');
    let y1 = value('q1y1');
    let x2 = value('q1x2');
    let y2 = value('q1y2');
    let slope = y2-y1/x2-x1;
    console.log(slope);
    return slope;
}

function toPointSlope()
{
    let slope = value('q2slope');
    let x = value('q2x');
    let y = value('q2y');
    let pointSlope = `y-${y} = ${slope}(x-${x})`;
    console.log(pointSlope);
    return pointSlope;
}

function pointToIntercept()
{
    let slope = value('q3slope');
    let x = value('q3x');
    let y = value('q3y');
    let mx = slope*x;
    let b = y-mx;
    console.log(b);
    return b;
}


