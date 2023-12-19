import java.util.Scanner;

public class Main {

	public static void main(String[] args) {		
		Scanner scanner = new Scanner(System.in);
		
		float sum = 0.0f;
		float sum2 = 0.0f;
		
		for(int i=0; i<20; i++) {
			String subject = scanner.next();
			float score = scanner.nextFloat();
			String subAvg = scanner.next();
			
			switch(subAvg) {
			case "A+":
				sum += score * 4.5;
				sum2 += score;
				break;
			case "A0":
				sum += score * 4.0;
				sum2 += score;
				break;
			case "B+":
				sum += score * 3.5;
				sum2 += score;
				break;
			case "B0":
				sum += score * 3.0;
				sum2 += score;
				break;
			case "C+":
				sum += score * 2.5;
				sum2 += score;
				break;
			case "C0":
				sum += score * 2.0;
				sum2 += score;
				break;
			case "D+":
				sum += score * 1.5;
				sum2 += score;
				break;
			case "D0":
				sum += score * 1.0;
				sum2 += score;
				break;
			case "F":
				sum += score * 0.0;
				sum2 += score;
				break;
			case "P":
				break;
			}
		}
		System.out.println(String.format("%.6f", sum/sum2));
		scanner.close();
	}
}