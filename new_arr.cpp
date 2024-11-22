#include<iostream>
using namespace std;


int main () {
 
 
    int *arr=new int[5];
    cout<<"Enter Elements:"<<endl;
    for(int i=0;i<5;i++){
        cout<<"\nEnter Element no."<<i+1<<": ";
        cin>>arr[i];

    };
    for(int i=0;i<5;i++){

    cout<<arr[i]<<endl;

    };

    return 0;
}