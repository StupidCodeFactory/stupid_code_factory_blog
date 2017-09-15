# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Author.find_or_create_by!(provider: ENV.fetch('ADMIN_PROVIDER'), uid: ENV.fetch('ADMIN_UID'), email: ENV.fetch('ADMIN_UID'))

insert_link = -> (paragrah) {
  paragrah.split('.').map do |sentence|
    sentence.split(/\W/).map { |word|
      if rand < 0.002
        a_tag = Nokogiri::HTML::DocumentFragment.parse "<a href=\"#{Faker::Internet.url}\">word</a>"
        a_tag.to_html
      else
        word
      end
    }.join(" ")
  end.join(". ")
}

body_generator = -> () {
  (1..rand(1..10)).map do |p|
    p_tag = Nokogiri::HTML::DocumentFragment.parse <<-EOHTML
    <p>
      #{insert_link.call(Faker::Hipster.paragraph(rand(3..10)))}
    </p>
    EOHTML
    p_tag.to_html
  end.map.with_object([]) do |paragraph, array|
    if rand < 0.1
      array << Nokogiri::HTML::DocumentFragment.parse("<h4>#{Faker::Hipster.sentence}</h4>").to_html
    end
    array << paragraph
    pp array
    array
  end.join("\n")
}

Article.destroy_all

50.times do
  Article.create!(
    title: Faker::Hipster.sentence,
    description: Faker::Hipster.sentence(rand(2..4)),
    body: body_generator.call()
  )
end
