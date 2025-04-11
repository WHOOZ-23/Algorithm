import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        StringBuilder sb = new StringBuilder();

        String S = sc.nextLine();

        for(int i=0; i<S.length(); i++) {
            int ascii = S.charAt(i);

            if(65 <= ascii && ascii <= 90) {
                if(90 < ascii+13) {
                    ascii -= 26;
                }
                sb.append((char) (ascii+13));
            } else if(97 <= ascii && ascii <= 122) {
                if(122 < ascii+13) {
                    ascii -= 26;
                }
                sb.append((char) (ascii+13));
            } else {
                sb.append(S.charAt(i));
            }
        }

        System.out.println(sb);

        sc.close();
    }
}