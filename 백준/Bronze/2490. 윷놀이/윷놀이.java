import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        for(int i=0; i<3; i++) {
            String[] y = scanner.nextLine().split(" ");

            int cnt = 0;

            for(String s : y) {
                if(Integer.parseInt(s) == 0) cnt++;
            }

            switch(cnt) {
                case 0 :
                    sb.append("E").append("\n");
                    break;
                case 1 :
                    sb.append("A").append("\n");
                    break;
                case 2 :
                    sb.append("B").append("\n");
                    break;
                case 3 :
                    sb.append("C").append("\n");
                    break;
                case 4 :
                    sb.append("D").append("\n");
                    break;
            }
        }

        System.out.println(sb.toString());

        scanner.close();
    }
}