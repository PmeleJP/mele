
module Mele

  module Filters

    #def anchor(id)
    #  puts "anchor:#{id}"
    #  "anchor:#{id}"
    #end
  end
end

Liquid::Template.register_filter(Mele::Filters)

