host=lucky.db.elephantsql.com
db=dlgtkyik
user=dlgtkyik
pass=Ck0zCKiFIG3zmSt1n6dxWo-fgcfZinu6
engine=postgres
port=5432
output=./src/models

echo "Generating database entities"
yarn typeorm-model-generator -h $host -d $db -u $user -x $pass -e $engine -p $port -o $output

echo "Removing unnecessary files"
rm -rf $output/tsconfig.json $output/ormconfig.json

echo "Moving entities out directory"
mv $output/entities/*.ts $output/

echo "Removing entity directory"
rm -rf $output/entities