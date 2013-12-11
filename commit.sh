git add .
read -p "Enter commit message: " msg
echo $msg
git commit -m "$msg"
git push origin master
