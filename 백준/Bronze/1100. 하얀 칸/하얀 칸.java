import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int cnt = 0;

        for(int i=0; i<8; i++) {
            String chess = sc.nextLine();

            for(int j=0; j<8; j++) {
                if(((i%2==0 && j%2==0) || (i%2==1 && j%2==1)) && chess.charAt(j) == 'F') {
                    cnt++;
                }
            }
        }

        System.out.println(cnt);

        sc.close();
    }
}