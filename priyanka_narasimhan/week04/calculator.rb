puts "Calculator"
operation = 'undef'

puts "MENU
(+). Addition
(-). Substraction
(*). Multiplication
(/). Division
(sqrt). SquareRoot
(^). Exponent
(q). Quit
"

while operation != 'q'
  puts "Enter which operation would you like?"
  operation = gets.chomp

  if operation == 'q'
    puts "Thanks for using my calculator. Bye"
    break


  else
    puts "Enter the numbers on which you like to do #{operation}"
    puts "Number 1?"
    number1 = gets.to_f

    if !(operation == 'sqrt' ||  operation == '^')
      puts "Number 2?"
      number2 = gets.to_f
    end

    case operation
    when '+'
      puts "Addition"
      result = number1 + number2
    when '-'
      puts "Substraction"
      result = number1 - number2

    when '*'
      puts "Multiplication"
      result = number1 * number2

    when '/'
      puts "Division"
      result = number1 / number2

    when 'sqrt'
      result = Math.sqrt(number1)

    when '^'
      result = Math.exp(number1)

    else
      puts "Invalid option. Restart"
      break
    end #case


    puts "Result of #{number1} #{operation} #{number2} is #{result}"
  end #else
end #while
