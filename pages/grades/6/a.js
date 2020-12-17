function a1() 
{
    let input = '4028';
    let place = 1;
    let chars = input.split('').reverse();

    let ans = chars[place-1];
    console.log(ans);
    return ans;
}

function a2()
{
    let input = "one hundred forty-nine";
    if(input.split("hundred"))
    {
        let hundred = input.split("hundred")[0];
        console.log(hundred);
    }
}
function translateStrToNum(input)
{
    let args = input.split(' ');
    let answer = 0;
    let nums = [];
    for(i=0;i<args.length;i++)
    {
        if(args[i].includes('-'))
        {
            let h = args[i].split('-');
            let hyphen = h[0].split(' ');
            let hyphen1 = hyphen[hyphen.length-2];
            let hyphen2 = h[h.length-1];
            if(args[i+1]=='hundred'||args[i+1]=='thousand')
            {
                nums.push((finder(hyphen1)+finder(hyphen2))*finder(i+1));
                console.log(finder(hyphen1));
                console.log(hyphen1);
                args.splice(args[i],1);
                args.splice(args[i],args[i]+1);
            }
            else
            {
                nums.push(finder((hyphen[0])+finder(hyphen[1])));
            }
        }
        else
        {
            if(args[i+1]=='hundred'||args[i+1]=='thousand')
            {
                console.log(finder(args[i]));
                console.log(finder(args[i]+1));
                nums.push(finder(args[i])*finder(args[i]+1));
                args.splice(args[i],1);
                args.splice(args[i],args[i]+1);
            }
            else
            {
                nums.push(finder(args[1]));
            }
        }
    }
    console.log(nums);
    for(i=0;i<nums.length;i++)
    {
        answer += nums[i];
    }
    console.log(answer);
    return answer;
}

function finder(input)
{
    let ans;
    if(input=="one")
    {
        ans = 1;
    }
    if(input=="two")
    {
        ans = 2;
    }
    if(input=="three")
    {
        ans = 3;
    }
    if(input=="four")
    {
        ans = 4;
    }
    if(input=="five")
    {
        ans = 5;
    }
    if(input=="six")
    {
        ans = 6;
    }
    if(input=="seven")
    {
        ans = 7;
    }
    if(input=="eight")
    {
        ans = 8;
    }
    if(input=="nine")
    {
        ans = 9;
    }
    if(input=="ten")
    {
        ans = 10;
    }
    if(input=="twenty")
    {
        ans = 20;
    }
    if(input=="thirty")
    {
        ans = 30;
    }
    if(input=="fourty")
    {
        ans = 40;
    }
    if(input=="fifty")
    {
        ans = 50;
    }
    if(input=="sixty")
    {
        ans = 60;
    }
    if(input=="seventy")
    {
        ans = 70;
    }
    if(input=="eighty")
    {
        ans = 80;
    }
    if(input=="ninety")
    {
        ans = 90;
    }

    if(input=="hundred")
    {
        ans = 100;
    }
    if(input=="thousand")
    {
        ans = 1000;
    }
    return ans;
}

translateStrToNum("one hundred");