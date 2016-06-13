var oLeft = document.getElementById('left');
		var oRight = document.getElementById('right');
		var oImg = document.getElementById('img');
		var oNumber = document.getElementById("txt");
		var num = 1;
		var oLi = document.getElementsByTagName('li');
		oRight.onclick = function() {
			num++;
			if (num>3) {
				num=1
			}
			imgTab()
		}
		oLeft.onclick = function(){     
			num--;
			if (num<1) {
				num=3
			}
			 imgTab()   
		}
		function imgTab(){		
			oImg.src = 'img/'+ num +'.png';
			for ( var j=0;j<oLi.length;j++)
			{
				if ( num - 1 == j )
				{
					oLi[j].style.background = '#f40'
				}else
				{
					oLi[j].style.background = '#777'
				}
			}
		}