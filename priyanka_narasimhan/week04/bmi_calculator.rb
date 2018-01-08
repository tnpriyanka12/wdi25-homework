puts "BMI calculator!"

puts "Enter your height in cm"
height = gets.to_f

puts "Now enter your weight in kg"
weight = gets.to_f

height_in_m = height / 100


bmi_calc = weight / (height_in_m * height_in_m)
puts "Your BMI is #{bmi_calc}"
