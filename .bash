# Alias Definitions

# iOS simulator
alias ios="open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app"
# PHP versions
alias php56="/Applications/MAMP/bin/php/php5.6.40/bin/php"
alias php71="/Applications/MAMP/bin/php/php7.1.31/bin/php"
alias php72="/Applications/MAMP/bin/php/php7.2.21/bin/php"
alias mphp="php72"
# Composer
alias composer='mphp /opt/composer.phar'
# GIT
alias gpush="git push origin master"
alias gstats="git status"
alias gpull='git pull'
alias gclone='git clone'
alias gcommit='git commit -m'
alias gvilla='eval `ssh-agent -s` && ssh-add ~/.ssh/id_rsa_git'
# Shortcuts
alias vhost='code /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf'
alias bash='code ~/.bash_profile'
alias host='sudo nano /etc/hosts'

# Custom Bash Promt
PS1="Villa@\w> "
