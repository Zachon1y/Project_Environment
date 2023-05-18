window.onload=function (){
    let arr=document.getElementsByClassName('searchme');
    for(var i=0;i<arr.length;i++)
    {
        arr[i].onclick=function (){
            if(this.id==='1')
            {
                document.getElementById("1").style.fontWeight='bold';
                document.getElementById("1").style.color='#66CC00';

                document.getElementById("2").style.fontWeight='unset';
                document.getElementById("2").style.color='black';

                document.getElementById("3").style.fontWeight='unset';
                document.getElementById("3").style.color='black';

                document.getElementById("box1").style.display='block';
                document.getElementById("box2").style.display='none';
                document.getElementById("box3").style.display='none';

            }
            else if(this.id==='2')
            {
                document.getElementById("1").style.fontWeight='unset';
                document.getElementById("1").style.color='black';

                document.getElementById("2").style.fontWeight='bold';
                document.getElementById("2").style.color='#66CC00';

                document.getElementById("3").style.fontWeight='unset';
                document.getElementById("3").style.color='black';

                document.getElementById("box1").style.display='none';
                document.getElementById("box2").style.display='block';
                document.getElementById("box3").style.display='none'
            }
            else
            {
                document.getElementById("1").style.fontWeight='unset';
                document.getElementById("1").style.color='black';

                document.getElementById("2").style.fontWeight='unset';
                document.getElementById("2").style.color='black';

                document.getElementById("3").style.fontWeight='bold';
                document.getElementById("3").style.color='#66CC00';

                document.getElementById("box1").style.display='none';
                document.getElementById("box2").style.display='none';
                document.getElementById("box3").style.display='block'
            }
            if(this.className==='src1')
            {
                this.className='src2';
                let name=this.id;
                let src=document.getElementsByClassName('src2');
                for(let j=0;j<src.length;j++)
                {
                    if(src[j].id!==name)
                    {
                        src[j].className='src2';
                    }
                }
            }
        }
    }
}