price=0;
        quant=0;
        r1=0;
        r2=0;
        r3=0;
        r4=0;
        r5=0;
        r6=0;
        r7=0;
        r8=0;
        r9=0;
        r10=0;
        r11=0;
        r12=0;
        price=0;
        item_price=2000;
        function rent1()
        {
            if (r1==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r1=1;
                 document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent2()
        {
            if (r2==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r2=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent3()
        {
            if (r3==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r3=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent4()
        {
            if (r4==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r4=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent5()
        {
            if (r5==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r5=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent6()
        {
            if (r6==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r6=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent7()
        {
            if (r7==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r7=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent8()
        {
            if (r8==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r8=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent9()
        {
            if (r9==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r9=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent10()
        {
            if (r10==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r10=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent11()
        {
            if (r11==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r11=1;
                document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function rent12()
        {
            if (r12==0){
                price+=item_price;
                alert('Added to cart');
                quant+=1;
                r12=1;
                 document.getElementById("dislist").innerHTML=price;
                document.getElementById("disquant").innerHTML=quant;
                
            }
            else{
                alert('Item already rented.')
            }
        }
        function checkout(){
            if( price==0)
            alert('No items selected');
            else
            {
                alert(quant+" items blocked. The total bill amount is Rs. "+price);
                if(window.confirm){
                    window.open("thankyou.html");
                }
            }
            
        }
        