# encoding: UTF-8
Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = 'spree_redesired_theme'
  s.version     = '2.2.2'
  s.summary     = 'The Redesired theme based on the Senorita theme purchased on Themeforest.com'
  s.description = 'The theme has been acquired from http://themeforest.net/item/senorita-responsive-html-template/full_screen_preview/8095836'
  s.required_ruby_version = '>= 1.9.3'

  s.author    = 'David Asabina'
  s.email     = 'david@supr.nu'
  s.homepage  = 'http://www.redesired.nl'

  #s.files       = `git ls-files`.split("\n")
  #s.test_files  = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.require_path = 'lib'
  s.requirements << 'none'

  s.add_dependency 'spree_core', '~> 2.2.2'

  s.add_development_dependency 'capybara', '~> 2.1'
  s.add_development_dependency 'coffee-rails'
  s.add_development_dependency 'database_cleaner'
  s.add_development_dependency 'factory_girl', '~> 4.4'
  s.add_development_dependency 'ffaker'
  s.add_development_dependency 'rspec-rails',  '~> 2.13'
  s.add_development_dependency 'sass-rails', '~> 4.0.2'
  s.add_development_dependency 'selenium-webdriver'
  s.add_development_dependency 'simplecov'
  s.add_development_dependency 'sqlite3'
end
