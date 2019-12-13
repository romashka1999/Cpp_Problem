#include <iostream>
#include <map>
using namespace std;
map< string, int > mp;
int teams, stage, i, j, point, fine, mx = -1e7;
string teamName, winner;

int main(){
    cin>>teams>>stage;
    while(teams--){
        for(j=1;j<=stage;j++){
            cin>>teamName>>point>>fine;
            mp[teamName]+=point;
            mp[teamName]-=fine;
            if(mx < mp[teamName]){
                mx = mp[teamName];
                winner = teamName;
            }
        }
    }
    cout<<endl<<winner<<" "<<mp[winner]<<endl;
    system("pause");
}