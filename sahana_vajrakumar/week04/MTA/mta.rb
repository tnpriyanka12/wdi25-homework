@subway = {
  n: ["Times Square" , "n34" , "n28" , "n23" , "Union Square" , "n8"],
  l: ["l8", "l6" , "Union Square" , "l3" , "l1"],
  linesix: ["Grand Central" , "six33" , "six28" , "six23", "Union Square" , "Astor Place"],
}

def source_line( src_line , src_stop )

if @subway[src_line].index(src_stop) < @subway[src_line].index("Union Square")
  src_array = @subway[src_line].slice(@subway[src_line].index(src_stop) , @subway[src_line].index("Union Square"))

elsif @subway[src_line].index(src_stop) > @subway[src_line].index("Union Square")
  src_array = @subway[src_line].slice(@subway[src_line].index("Union Square") , @subway[src_line].index(src_stop)+1)
  src_array = src_array.reverse
end
end

def destination_line( dest_line , dest_stop )
if @subway[dest_line].index(dest_stop) < @subway[dest_line].index("Union Square")
  dest_array = @subway[dest_line].slice(@subway[dest_line].index(dest_stop) , @subway[dest_line].index("Union Square"))
  dest_array = dest_array.reverse

elsif @subway[dest_line].index(dest_stop) > @subway[dest_line].index("Union Square")
  dest_array = @subway[dest_line].slice(@subway[dest_line].index("Union Square")+1 , @subway[dest_line].index(dest_stop)+1)
end
end

def plan_my_trip( start_line , start_point , stop_line , stop_point )
  if @subway[start_line].include?(start_point) && @subway[stop_line].include?(stop_point)
trip = source_line( start_line , start_point ) + destination_line( stop_line , stop_point )
print "Number of stops: #{trip.length} and the stops are -- #{trip.join(" , ")}--"

else
  puts "Invalid input"
end
end


plan_my_trip( :n , "n34" ,  :l , "l8")
