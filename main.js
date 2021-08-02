var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.pinimg.com/236x/dd/de/cb/dddecbdc7e5119162cf201a67e1b0ef3--good-afternoon-afternoon-delight.jpg","https://thumbs.dreamstime.com/b/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg", "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200466/91961521-mom-wearing-short-sleeve-clothes-is-guiding.jpg?ver=6" ];
            var names = ["Family Book","Tapan Kumar Acharjee my grand father","Kalyani Acharjee my grand mother","Sandeep Nanda my father", "Roompa Nanda my mother"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
        
